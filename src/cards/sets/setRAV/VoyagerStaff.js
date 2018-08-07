"use strict";
const Constants = require ("../../../Constants");
const VoyagerStaffBase = require("../setDDU/VoyagerStaff");

class VoyagerStaff extends VoyagerStaffBase {
  constructor (game) {
    super(game, "Voyager Staff", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VoyagerStaff;
