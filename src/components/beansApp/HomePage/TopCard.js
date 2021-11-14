import React from 'react';

const TopCard = () => {
    return (
        <div className="user_card">
            <div className="top_info">
                <div className="">
                    <h3 id="user-holla">Hey User</h3>
                    <p>
                        Welcome back to Ewa hut,<br/>
                        where life is not a pot of beans
                    </p>
                </div>
                <div className="fun_facts">
                    Fun Facts?
                </div>
            </div>
            <hr className="horizontal_line"/>
                <div className="info_bottom">
                    <div className="last_order">
                        <p>Last Order</p>
                        <div className="last_order_date">
                            20/12/2021
                        </div>
                    </div>
                    <div className="last_order">
                        <p>Last Order</p>
                        <div className="last_order_date">
                            20/12/2021
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TopCard;