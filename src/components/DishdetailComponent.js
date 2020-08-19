import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

export class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                      
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments( dish ) {
        if (dish != null) {
            const comm = dish.comments.map((c) => {
                return (
                    <ul className="list-unstyled">
                        <li key={c.id}>
                            <p>{c.comment}</p>
                            <li>-- {c.author},
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                    }).format(new Date(Date.parse(c.date)))}
                            </li>
                        </li>
                    </ul>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {comm}
                </div>
            );
        } 
        else {
            return <div></div>;
        }
    }
    render(){
        if(this.props.dish != null)
            return (
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                   {this.renderDish(this.props.dish)} 
                </div>
                <div  className="col-12 col-md-5 m-1">
                   {this.renderComments(this.props.dish)} 
                </div>
                </div>
               
            
            );
        else{
            return <div></div>;
        }
    }
}

