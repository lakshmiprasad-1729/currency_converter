/* eslint-disable react/prop-types */

export default function InputBox({
      label,//forchanging from to to or viceversa
      onAmountChange,//state to react on change of amount 
      onCurrencyChange,//state to react on change fof type of currency
      currencyOptions=[],
      selectCurrency,
      amount,
      amountDisable,
      liveConverter
}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                {label } 
                {/* forgiving information change to change direction */}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    value={amount}
                    min={0}
                    placeholder="Amount"
                    disabled={amountDisable}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    onClick={liveConverter}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))} 
                </select>
            </div>
        </div>
    );
}


