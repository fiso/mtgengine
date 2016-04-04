"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CentaurCourserBase = require("../setM10/CentaurCourser.js");

class CentaurCourser extends CentaurCourserBase {
  constructor(game) {
    super(game, "Centaur Courser", "Magic 2013", "M13");
  }
}

module.exports = CentaurCourser;
