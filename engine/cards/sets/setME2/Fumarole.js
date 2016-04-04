"use strict";
const Constants = require ("../../../Constants");
const FumaroleBase = require("../setICE/Fumarole");

class Fumarole extends FumaroleBase {
  constructor(game) {
    super(game, "Fumarole", "Masters Edition II", "ME2");
  }
}

module.exports = Fumarole;
