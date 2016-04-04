"use strict";
const Constants = require ("../../../Constants");
const AngelicVoicesBase = require("../setCHR/AngelicVoices");

class AngelicVoices extends AngelicVoicesBase {
  constructor(game) {
    super(game, "Angelic Voices", "Legends", "LEG");
  }
}

module.exports = AngelicVoices;
