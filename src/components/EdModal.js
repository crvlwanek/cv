import * as React from "react"

import {
  Paper,
  Typography,
  Container,
  IconButton,
  Box,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import OnlineCourse from "./OnlineCourse"

const EdModal = props => {
  return (
    <Paper className="modal-paper">
      <Box className="modal-box">
        <IconButton onClick={props.close}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Typography variant="h4" className="modal-header">
        Open Source Computer Science
      </Typography>
      <Container maxWidth="md">
        <Typography className="modal-header">
          A collection of online courses by reputable universities intended to
          satisfy the requirements of a traditional Bachelor's degree.
        </Typography>
        <Typography className="category" variant="h5">
          Computer Science
        </Typography>
        <OnlineCourse
          courseName="Intro to Computer Science (CS50)"
          school="Harvard"
          link="https://www.edx.org/course/cs50s-introduction-to-computer-science"
          completed="October 2020"
        />
        <OnlineCourse
          courseName="Mathematical Thinking in Computer Science"
          school="UC San Diego"
          link="https://www.coursera.org/learn/what-is-a-proof"
          completed="December 2020"
          credential="https://coursera.org/share/390573ddd885e848273f6068548006ea"
        />
        <Typography className="category" variant="h5">
          Programming
        </Typography>
        <OnlineCourse
          courseName="Programming for Everybody"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python"
          completed="November 2020"
          credential="https://coursera.org/share/0b4a0b1aff1439f345ceafc49c77a893"
        />
        <OnlineCourse
          courseName="Python Data Structures"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-data"
          completed="December 2020"
          credential="https://coursera.org/share/f7516ebe8faed46e1ffd9342d72994b5"
        />
        <OnlineCourse
          courseName="Using Python to Access Web Data"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-network-data"
          completed="December 2020"
          credential="https://coursera.org/share/b22835eadb957ca5777b96b57e1f9124"
        />
        <OnlineCourse
          courseName="Using Databases with Python"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-databases"
          completed="December 2020"
          credential=" https://coursera.org/share/07ee6833f034fe425603ea2b7bd8a416"
        />
        <OnlineCourse
          courseName="Capstone: Retrieving, Processing, and Visualizing Data with Python"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-data-visualization"
          completed="December 2020"
          credential="https://coursera.org/share/03d376ec4da4fbe0026837fa263b1362"
        />
        <Typography className="category" variant="h5">
          Web Development
        </Typography>
        <OnlineCourse
          courseName="Web Application Technologies and Django"
          school="University of Michigan"
          link="https://www.coursera.org/learn/django-database-web-apps"
          completed="December 2020"
          credential="https://coursera.org/share/33c934816bd57bf571310f430407da61"
        />
        <OnlineCourse
          courseName="Building Web Applications in Django"
          school="University of Michigan"
          link="https://www.coursera.org/learn/django-build-web-apps"
          completed="December 2020"
          credential="https://coursera.org/share/7878dcc65df48bdf1b64d57d400fe5d4"
        />
        <OnlineCourse
          courseName="Django Features and Libraries"
          school="University of Michigan"
          link="https://www.coursera.org/learn/django-features-libraries"
          completed="December 2020"
          credential="https://coursera.org/share/415037c5e38b7dfa755da0844f566ba6"
        />
        <OnlineCourse
          courseName="Using JavaScript, JQuery, and JSON in Django"
          school="University of Michigan"
          link="https://www.coursera.org/learn/django-javascript-jquery-json"
          completed="December 2020"
          credential="https://coursera.org/share/ec171ae44b22a32ef922b7faef40ad90"
        />
        <OnlineCourse
          courseName="The Complete 2021 Web Development Bootcamp"
          school="Udemy"
          link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
          completed="January 2020"
          credential="https://www.udemy.com/certificate/UC-85479198-e06a-4bb3-9052-d88becf54ed1/"
        />
        <Typography className="category" variant="h5">
          Data Science
        </Typography>
        <OnlineCourse
          courseName="Introduction to Data Science in Python"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-data-analysis"
          completed="January 2020"
          credential="https://coursera.org/share/37435c8e5ae2b9d7ef1a3c77f7efb746"
        />
        <OnlineCourse
          courseName="Applied Plotting, Charting & Data Representation in Python"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-plotting"
          completed="January 2020"
          credential="https://coursera.org/share/294ce6da4aee7e906e62e686289641f4"
        />
        <OnlineCourse
          courseName="Applied Machine Learning in Python"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-machine-learning"
          completed="January 2020"
          credential="https://coursera.org/share/94c401d264d8d1520a077dcbb604ca4a"
        />
        <OnlineCourse
          courseName="Applied Text Mining in Python"
          school="University of Michigan"
          link="ttps://www.coursera.org/learn/python-text-mining"
          completed="January 2020"
          credential="https://coursera.org/share/5353cc103bd98909a1f27b34d2696fc4"
        />
        <OnlineCourse
          courseName="Applied Social Network Analysis in Python"
          school="University of Michigan"
          link="https://www.coursera.org/learn/python-social-network-analysis"
          completed="January 2020"
          credential="https://coursera.org/share/e3ba84c1bed44f61996bdb9dc2195f1e"
        />
      </Container>
    </Paper>
  )
}

export default EdModal