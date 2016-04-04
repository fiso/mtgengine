"use strict";
const Constants = require ("../../../Constants");
const EmberBeastBase = require("../setGTC/EmberBeast");

class EmberBeast extends EmberBeastBase {
  constructor(game) {
    super(game, "Ember Beast", "Odyssey", "ODY");
  }
}

module.exports = EmberBeast;
