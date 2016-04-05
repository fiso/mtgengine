"use strict";
const Constants = require ("../../../Constants");
const AngerBase = require("../setDDI/Anger");

class Anger extends AngerBase {
  constructor(game) {
    super(game, "Anger", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Anger;
