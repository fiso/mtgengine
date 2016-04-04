"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WringFleshBase = require("../setM12/WringFlesh.js");

class WringFlesh extends WringFleshBase {
  constructor(game) {
    super(game, "Wring Flesh", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WringFlesh;
