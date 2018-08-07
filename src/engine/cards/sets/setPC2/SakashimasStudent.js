"use strict";
const Constants = require ("../../../Constants");
const SakashimasStudentBase = require("../setPCA/SakashimasStudent");

class SakashimasStudent extends SakashimasStudentBase {
  constructor (game) {
    super(game, "Sakashima's Student", "Planechase 2012", "PC2");
  }
}

module.exports = SakashimasStudent;
