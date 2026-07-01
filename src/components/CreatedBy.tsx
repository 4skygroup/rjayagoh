export default function CreatedBy() {
    return (
        <div className="created-by">
            <span className="created-by__label">
                Créé par
            </span>

            <a
                href="https://visuanceagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="created-by__logo-link"
            >
                <div className="created-by__logo-container">
                    <img
                        src="/visuance-logo.webp"
                        alt="Visuance"
                        className="created-by__logo"
                    />
                    <div className="created-by__logo-overlay"></div>
                </div>
            </a>

            <div className="created-by__divider"></div>

            <a
                href="https://playtosky.com"
                target="_blank"
                rel="noopener noreferrer"
                className="created-by__text-link"
            >
                <span className="created-by__text">
                    Play to Sky
                    <span className="created-by__underline"></span>
                </span>
            </a>
        </div>
    );
}