'use strict';

import { RequestState } from '../common'

export default {
    pilot: null,
    groups: {},
    groupsOrdered: [],
    seats: {},
    seatsOrdered: [],
    numbers: [],
    numbersMap : {},
    devicesOrdered: [],
    devices: {},
    profilesOrdered: [],
    profiles: {},
    models: {},
    modelsOrdered: [],
    listState: RequestState.initiated,
    listError: null,
    listLoadingSilently: false,
    listCurrentPage: 1,
    listLastPage: null,
    listProfileFilter: null,
    listMacAddressFilter: null,
    listStationNameFilter: null,
    addState: RequestState.initiated,
    addError: null,
    addItem: null,
    updateState: RequestState.initiated,
    updateError: null,
    updateItem: null,
    removeState: RequestState.initiated,
    removeError: null,
    removeItem: null,
    deviceStates: {},
    deviceErrors: {},
    deviceRemoved: null,
    lastAddedGroup: null,
    lastRemovedGroup: null,
    lastAddedSeat: null,
    lastRemovedSeat: null,
    lastUpdatedField: null,
    updateAliasNumbersState: RequestState.initiated,
    updateAliasNumbersItem: null,
    updateGroupsAndSeatsState: RequestState.initiated,
    updateGroupsAndSeatsItem: null,
    groupsAndSeats: [],
    groupsAndSeatsState: RequestState.initiated,
    groupsAndSeatsError: null,
    updatedDeviceKey: null,
    createDeviceState: RequestState.initiated,
    createDeviceItem: null,
    createDeviceError: null,
    listProfilesState: RequestState.initiated,
    listProfilesError: null,
    updatedDevice: null,
    updatedDeviceProperty: null,
    updatedDeviceState: RequestState.initiated,
    updatedDeviceError: null,
    modelImageStates: {},
    modelImageErrors: {},
    modelImages: {},
    groupReloading: null,
    groupReloadingState: RequestState.initiated,
    groupReloadingError: null,
    seatReloading: null,
    seatReloadingState: RequestState.initiated,
    seatReloadingError: null,
    chipModelFilter: null,
    chipMacAddressFilter: null,
    chipStationNameFilter: null,
    callQueueGroupsAndSeats: {},
    callQueueGroupsAndSeatsOrdered: [],
    configReloading: null,
    configReloadingState: RequestState.initiated,
    configReloadingError: null
}
