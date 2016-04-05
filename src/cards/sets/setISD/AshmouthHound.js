"use strict";
const Constants = require ("../../../Constants");
const AshmouthHoundBase = require("../setDDK/AshmouthHound");

class AshmouthHound extends AshmouthHoundBase {
  constructor(game) {
    super(game, "Ashmouth Hound", "Innistrad", "ISD");
  }
}

module.exports = AshmouthHound;
