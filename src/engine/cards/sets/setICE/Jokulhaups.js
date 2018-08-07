"use strict";
const Constants = require ("../../../Constants");
const JokulhaupsBase = require("../setMED/Jokulhaups");

class Jokulhaups extends JokulhaupsBase {
  constructor (game) {
    super(game, "Jokulhaups", "Ice Age", "ICE");
  }
}

module.exports = Jokulhaups;
