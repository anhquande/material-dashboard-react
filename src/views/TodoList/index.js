import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Log from "../../Log";
import { bindActionCreators } from "redux";
import * as todoActions from "../../entities/todo/actions";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class TodoList extends React.Component {
  componentDidMount() {
    Log.info("TodoList is mount");
    const { fetchTodos } = this.props.actions;
    fetchTodos();
    console.log(this);
  }

  render() {
    const { classes } = this.props;

    const todosWrapper = this.props.todos;

    let arrTodos = [];
    if (todosWrapper.length > 0) {
      const todos = todosWrapper[0];
      for (let i = 0; i < todos.length; i++) {
        let item = [];
        item.push(todos[i].id);
        item.push(todos[i].userId);
        item.push(todos[i].title);
        item.push(todos[i].completed);
        arrTodos.push(item);
      }
    }
    console.log("render: ", arrTodos);
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card plain>
            <CardHeader plain color="primary">
              <h4 className={classes.cardTitleWhite}>Todos</h4>
              <p className={classes.cardCategoryWhite}>
                Fetched from jsonholder
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "UserId", "Title", "completed"]}
                tableData={arrTodos}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todoReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoList));
