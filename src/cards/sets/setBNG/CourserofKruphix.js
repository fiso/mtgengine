"use strict";
const Constants = require ("../../../Constants");
const CourserofKruphixBase = require("../setA25/CourserofKruphix");

class CourserofKruphix extends CourserofKruphixBase {
  constructor (game) {
    super(game, "Courser of Kruphix", "Born of the Gods", "BNG");
  }
}

module.exports = CourserofKruphix;
