export const Main = ({children}: any) => {
  return (
    <main className={'main'}>
      <div className={'container'}>
        <div className={'main__content'}>
          {children}
        </div>
      </div>
    </main>
  )
}
