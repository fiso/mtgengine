"use strict";
const Constants = require ("../../../Constants");
const EndlessOneBase = require("../setBFZ/EndlessOne");

class EndlessOne extends EndlessOneBase {
  constructor (game) {
    super(game, "Endless One", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = EndlessOne;
