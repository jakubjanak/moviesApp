type SearchBtnType = {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function SearchBtn({value, onChange}: SearchBtnType) {
  return (
    <div className="border-b-2 w-max mx-auto">
        <input type="text" name="vyhledat" id="vyhledat" placeholder="Vyhledat..." value={value} onChange={onChange} />
    </div>
  )
}
