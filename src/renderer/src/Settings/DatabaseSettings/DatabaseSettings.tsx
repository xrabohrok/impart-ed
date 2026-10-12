import { Box, Stack, TextField, Typography } from "@mui/material";
import { ToggleSetting } from "../ToggleSetting";

export function DatabaseSettings() {
    return (
        <Box>
            <Stack mt={1} mb={2} direction="row" gap={2} alignItems="center">
                <Typography variant="h3">Database Settings</Typography>


            </Stack>
            <Stack gap={4}>
                <ToggleSetting
                    storeKey="useCustomDB"
                    title="Use Custom Database File"
                    subtitle={
                        <>
                            You probably do not need to mess with this setting.  However, if you are running Impart on, say, a Dropbox folder or thumbstick or somewhere share-able, it might be helpful to place the database itself in the shared location as well.
                            Or maybe the default APPDATA location is sensitive or unavailable, and you can choose somewhere that is avaialable.
                        </>
                    }
                />
            </Stack>
            <Stack>
                <TextField type="text" label="Custom DB File" />
            </Stack>
        </Box>
    )
}