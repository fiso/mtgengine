"use strict";
const Constants = require ("../../../Constants");
const TreeofPerditionBase = require("../setEMN/TreeofPerdition");

class TreeofPerdition extends TreeofPerditionBase {
  constructor (game) {
    super(game, "Tree of Perdition", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = TreeofPerdition;
