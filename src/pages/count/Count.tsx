const Count: React.FC<{count: number, code: string, error: string}>= ({count, code, error}) => {
  return (
    <>
      { error ? (
        <div>
          {error}
        </div>
      ) : (
        <>
        <div>
          Now you're in
        </div>
        <div className="flex gap-3">
          <div className="text-9xl font-bold">
            {count}
          </div>
          <div className="text-lg">
            Days!
          </div>
        </div>
        </>
      )}
      <div className="mt-3 text-sm opacity-70">Code: {code}</div>
    </>
  )
}

export default Count