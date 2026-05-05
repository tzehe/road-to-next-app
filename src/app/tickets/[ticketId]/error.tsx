'use client'

import React from 'react';

const Error = ({error}: { error: Error }) => {
    return (
        <div>
            Tickets Detail Error
            Page: {error.message || "Something went wrong with loading Tickets Detail Page. Please try again later."}
        </div>
    );
};

export default Error;