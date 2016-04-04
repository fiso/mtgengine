"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FumaroleBase = require("../setICE/Fumarole.js");

class Fumarole extends FumaroleBase {
  constructor(game) {
    super(game, "Fumarole", "Masters Edition II", "ME2");
  }
}

module.exports = Fumarole;
