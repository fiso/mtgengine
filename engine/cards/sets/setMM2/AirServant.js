"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AirServantBase = require("../setM11/AirServant.js");

class AirServant extends AirServantBase {
  constructor(game) {
    super(game, "Air Servant", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = AirServant;
