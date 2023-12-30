import './LoadingScreen.module.css';

export const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};