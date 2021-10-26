import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';


interface Props {
    
}

export const ThisDay = (props: Props) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top_block_wrapper}>
                    <div className={s.this__temp}>20</div>
                    <div className={s.this__day_name}>Today</div>
                </div>
                <GlobalSvgSelector id="sun" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    time: <span>00:00</span>
                </div>
                <div className={s.this__city}>
                    city: <span>Ribnita</span>
                </div>
            </div>
        </div>
    )
}
