"use strict";
const Constants = require ("../../../Constants");
const PyreHoundBase = require("../setA25/PyreHound");

class PyreHound extends PyreHoundBase {
  constructor (game) {
    super(game, "Pyre Hound", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PyreHound;
