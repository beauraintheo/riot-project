import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Check } from "@assets/custom/Check.tsx";
import { Globe } from "@assets/custom/Globe.tsx";

/**
 * @typedef HeaderMenuChoiceProps
 * @property {string} label - Choice label
 * @property {() => void} onClick - Function to call when the choice is clicked
 * @property {boolean} displayIcon - Whether to display the check icon
 */
interface HeaderMenuChoiceProps {
  label: string;
  onClick: () => void;
  displayIcon: boolean;
}

const mappinMenuChoices = [
  { label: "Français", value: "fr" },
  { label: "English (NA)", value: "en" },
];

const HeaderMenuChoice = ({
  label,
  onClick,
  displayIcon,
}: HeaderMenuChoiceProps) => (
  <li onClick={onClick}>
    <div className={`header-menu-choice${displayIcon ? " selected" : ""}`}>
      <span>{label}</span>
      { displayIcon ? <Check color="#c4202b" /> : null }
    </div>
  </li>
);

export const Header = () => {
  const {
    i18n: {
      changeLanguage,
      language,
    },
  } = useTranslation();

  const [ toggleDropdown, setToggleDropdown ] = useState(false);

  const handleChangeLang = (newLanguage: string) => {
    changeLanguage(newLanguage);
    setToggleDropdown(false);
  };

  return (
    <header className="header">
      {/* <RiotLogo /> */}
      <img src={RiotLogo} alt="Riot Games logo" />

      <button
        className="header-button"
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <Globe />
      </button>

      {
        toggleDropdown
          ? (
            <ul className="header-dropdown-menu">
              {
                mappinMenuChoices.map(({ label, value }) => (
                  <HeaderMenuChoice
                    key={value}
                    label={label}
                    onClick={() => handleChangeLang(value)}
                    displayIcon={value === language}
                  />
                ))
              }
            </ul>
            )
          : null
      }
    </header>
  );
};
