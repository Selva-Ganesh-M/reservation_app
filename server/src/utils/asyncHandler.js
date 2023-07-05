const asyncHandler = (func) => async (...args) => {
    try {
        await func(...args);
    } catch (error) {
        const next = args[args.length - 1]
        next(error)
    }
}

export default asyncHandler