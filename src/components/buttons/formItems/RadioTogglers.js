
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioTogglers({options, defaultValue,onChange}){
    return (
        <div className="radio-togglers shadow ">
            {options.map(option => (
                <label>
                    <input 
                    type="radio" 
                    name="bgType" 
                    onClick={e => onChange(e.target.value)}
                    defaultChecked={defaultValue === option.value}
                    value={option.value}
                    />
                    <div className="gap-2">
                    <FontAwesomeIcon icon={option.icon} />
                        <span>{option.label}</span>
                    </div>
                </label>
            ))}
        </div>
    );
}