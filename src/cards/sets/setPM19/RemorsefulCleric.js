"use strict";
const Constants = require ("../../../Constants");
const RemorsefulClericBase = require("../setM19/RemorsefulCleric");

class RemorsefulCleric extends RemorsefulClericBase {
  constructor (game) {
    super(game, "Remorseful Cleric", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = RemorsefulCleric;
