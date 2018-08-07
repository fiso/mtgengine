"use strict";
const Constants = require ("../../../Constants");
const CourserofKruphixBase = require("../setA25/CourserofKruphix");

class CourserofKruphix extends CourserofKruphixBase {
  constructor (game) {
    super(game, "Courser of Kruphix", "Magic Online Promos", "PRM");
  }
}

module.exports = CourserofKruphix;
