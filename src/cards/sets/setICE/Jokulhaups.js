"use strict";
const Constants = require ("../../../Constants");
const JokulhaupsBase = require("../set6ED/Jokulhaups");

class Jokulhaups extends JokulhaupsBase {
  constructor(game) {
    super(game, "Jokulhaups", "Ice Age", "ICE");
  }
}

module.exports = Jokulhaups;
