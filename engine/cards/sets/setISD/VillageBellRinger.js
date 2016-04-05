"use strict";
const Constants = require ("../../../Constants");
const VillageBellRingerBase = require("../setDDQ/VillageBellRinger");

class VillageBellRinger extends VillageBellRingerBase {
  constructor(game) {
    super(game, "Village Bell-Ringer", "Innistrad", "ISD");
  }
}

module.exports = VillageBellRinger;
