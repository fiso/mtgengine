"use strict";
const Constants = require ("../../../Constants");
const AngerBase = require("../setCMA/Anger");

class Anger extends AngerBase {
  constructor (game) {
    super(game, "Anger", "Commander 2011", "CMD");
  }
}

module.exports = Anger;
