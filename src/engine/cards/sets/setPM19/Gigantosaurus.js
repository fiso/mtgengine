"use strict";
const Constants = require ("../../../Constants");
const GigantosaurusBase = require("../setM19/Gigantosaurus");

class Gigantosaurus extends GigantosaurusBase {
  constructor (game) {
    super(game, "Gigantosaurus", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = Gigantosaurus;
