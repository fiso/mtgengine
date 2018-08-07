"use strict";
const Constants = require ("../../../Constants");
const PartingThoughtsBase = require("../setPZ2/PartingThoughts");

class PartingThoughts extends PartingThoughtsBase {
  constructor (game) {
    super(game, "Parting Thoughts", "Commander 2016", "C16");
  }
}

module.exports = PartingThoughts;
