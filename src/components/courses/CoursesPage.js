import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import propTypes from 'prop-types';




class CoursesPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      course: {
        title: ''
      }
    }

  }

  handleChange = (event) => {
    const course = {...this.state.course, title: event.target.value};
    this.setState({course});
  };

  handleSubmit = (event) => {
    // const {course} = this.state;
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course))
    // this.setState({savedCourse: course.title});
  }

  render(){
    return(
      <>
      <form
        onSubmit={this.handleSubmit} 
      >
        <h2>Courses</h2>
        <h4>Add courses</h4>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input
          type='submit'
          value='Save'
        />
      </form>
      <section>
        {
          this.props.courses.map(course =>
            (<p key={course.title}><br/>{course.title}<br/></p>)
          )
        }
      </section>
      </>
    )
  }
}


CoursesPage.propTypes = {
  courses: propTypes.array.isRequired,
  dispatch: propTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return{
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage);