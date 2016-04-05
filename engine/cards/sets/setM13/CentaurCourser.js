"use strict";
const Constants = require ("../../../Constants");
const CentaurCourserBase = require("../setM10/CentaurCourser");

class CentaurCourser extends CentaurCourserBase {
  constructor(game) {
    super(game, "Centaur Courser", "Magic 2013", "M13");
  }
}

module.exports = CentaurCourser;
