import Spline from '@splinetool/react-spline/next';

export default function HeroAnimation() {
    return (
        <div className='size-fit z-0 absolute left-1/3 border-2 overflow-hidden'>
            <Spline
                scene="https://prod.spline.design/DdVh5oAyRC5xdVUn/scene.splinecode"
            />
        </div>
    );
}
