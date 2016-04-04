"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmberBeastBase = require("../setGTC/EmberBeast.js");

class EmberBeast extends EmberBeastBase {
  constructor(game) {
    super(game, "Ember Beast", "Odyssey", "ODY");
  }
}

module.exports = EmberBeast;
