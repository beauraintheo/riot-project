import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <hr />
      <span>
        {`© 2024 - Théo Beaurain - ${t("AllRightsReserved")}`}
      </span>
    </footer>
  );
};
