"use strict";
const Constants = require ("../../../Constants");
const IsolateBase = require("../setM19/Isolate");

class Isolate extends IsolateBase {
  constructor (game) {
    super(game, "Isolate", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = Isolate;
