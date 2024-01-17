import ColorBox from './ColorBox'
import './ColorBox.css'

export default function ColorBoxGrid({colors}) {
    return (
        <div className='boxContainerUpper'>
            <div className="boxContainer">
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
            </div>
            <div className="boxContainer">
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
            </div>
            <div className="boxContainer">
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
            </div>
            <div className="boxContainer">
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
            </div>
            <div className="boxContainer">
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
                <ColorBox colors={colors}/>
            </div>
        </div>
    )
}