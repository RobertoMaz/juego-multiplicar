function Row({arrBluf, handleClick, square}) {

    return (
        <>
            <div className="row">
                <div className={square} onClick={handleClick}>{arrBluf[0]}</div>
                <div className={square} onClick={handleClick}>{arrBluf[1]}</div>
                <div className={square} onClick={handleClick}>{arrBluf[2]}</div>
            </div>
            <div className="row">
                <div className={square} onClick={handleClick}>{arrBluf[3]}</div>
                <div className={square} onClick={handleClick}>{arrBluf[4]}</div>
                <div className={square} onClick={handleClick}>{arrBluf[5]}</div>
            </div>
        </>
    ); 
}

export default Row;