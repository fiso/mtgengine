"use strict";
const Constants = require ("../../../Constants");
const FumaroleBase = require("../setME2/Fumarole");

class Fumarole extends FumaroleBase {
  constructor (game) {
    super(game, "Fumarole", "Ice Age", "ICE");
  }
}

module.exports = Fumarole;
