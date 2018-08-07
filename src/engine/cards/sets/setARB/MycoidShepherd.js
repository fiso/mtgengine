"use strict";
const Constants = require ("../../../Constants");
const MycoidShepherdBase = require("../setPM10/MycoidShepherd");

class MycoidShepherd extends MycoidShepherdBase {
  constructor (game) {
    super(game, "Mycoid Shepherd", "Alara Reborn", "ARB");
  }
}

module.exports = MycoidShepherd;
