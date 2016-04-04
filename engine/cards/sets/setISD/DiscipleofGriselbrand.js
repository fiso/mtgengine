"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiscipleofGriselbrandBase = require("../setC13/DiscipleofGriselbrand.js");

class DiscipleofGriselbrand extends DiscipleofGriselbrandBase {
  constructor(game) {
    super(game, "Disciple of Griselbrand", "Innistrad", "ISD");
  }
}

module.exports = DiscipleofGriselbrand;
