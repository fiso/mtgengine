"use strict";
const Constants = require ("../../../Constants");
const SecondThoughtsBase = require("../setEMA/SecondThoughts");

class SecondThoughts extends SecondThoughtsBase {
  constructor (game) {
    super(game, "Second Thoughts", "Odyssey", "ODY");
  }
}

module.exports = SecondThoughts;
