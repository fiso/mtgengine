"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CourserofKruphixBase = require("../setBNG/CourserofKruphix.js");

class CourserofKruphix extends CourserofKruphixBase {
  constructor(game) {
    super(game, "Courser of Kruphix", "Clash Pack", "CPK");
  }
}

module.exports = CourserofKruphix;
