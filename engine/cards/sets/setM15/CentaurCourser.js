"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CentaurCourserBase = require("../setM10/CentaurCourser.js");

class CentaurCourser extends CentaurCourserBase {
  constructor(game) {
    super(game, "Centaur Courser", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CentaurCourser;
