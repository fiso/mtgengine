"use strict";
const Constants = require ("../../../Constants");
const JeditOjanenBase = require("../setME3/JeditOjanen");

class JeditOjanen extends JeditOjanenBase {
  constructor (game) {
    super(game, "Jedit Ojanen", "Legends", "LEG");
  }
}

module.exports = JeditOjanen;
